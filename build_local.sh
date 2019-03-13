#!/bin/bash
# publish-plugin.sh builds and publishes a package containing the resource provider to
# s3://rel.pulumi.com/releases/plugins.
set -o nounset -o errexit -o pipefail

# Update this with the name of the provider
PROVIDER_NAME="spotinst"

ROOT=$(dirname $0)
WORK_PATH=$(mktemp -d)
VERSION=$(jq -r '.version' < "${ROOT}/sdk/nodejs/bin/package.json")
PLUGIN_PACKAGE_NAME="pulumi-resource-${PROVIDER_NAME}-${VERSION}-$(go env GOOS)-$(go env GOARCH).tar.gz"
PLUGIN_PACKAGE_DIR="$(mktemp -d)"
PLUGIN_PACKAGE_PATH="${PLUGIN_PACKAGE_DIR}/${PLUGIN_PACKAGE_NAME}"
echo ${PLUGIN_PACKAGE_NAME}

# When crossbuilding, we want to ensure we have .exe for the windows binaries.
BIN_SUFFIX=
if [ "$(go env GOOS)" = "windows" ]; then
    BIN_SUFFIX=".exe"
fi

go build \
   -ldflags "-X github.com/pulumi/pulumi-${PROVIDER_NAME}/pkg/version.Version=${VERSION}" \
   -o "${WORK_PATH}/pulumi-resource-${PROVIDER_NAME}${BIN_SUFFIX}" \
   "${ROOT}/cmd/pulumi-resource-${PROVIDER_NAME}"

# Tar up the plugin
tar -czf ${PLUGIN_PACKAGE_PATH} -C ${WORK_PATH} .
mkdir -p ${ROOT}/.pulumi/plugins
cp -f "${PLUGIN_PACKAGE_PATH}" "${ROOT}/.pulumi/plugins/${PLUGIN_PACKAGE_NAME}"

rm -rf "${PLUGIN_PACKAGE_DIR}"
rm -rf "${WORK_PATH}"
