# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Ocean(pulumi.CustomResource):
    autoscaler: pulumi.Output[dict]
    """
    Describes the Ocean Kubernetes autoscaler.
    """
    blacklists: pulumi.Output[list]
    """
    Instance types not allowed in the Ocean cluster. Cannot be configured if `whitelist` is configured.
    """
    controller_id: pulumi.Output[str]
    """
    The ocean cluster identifier. Example: `ocean.k8s`
    """
    desired_capacity: pulumi.Output[int]
    """
    The number of instances to launch and maintain in the cluster.
    """
    fallback_to_ondemand: pulumi.Output[bool]
    """
    If not Spot instance markets are available, enable Ocean to launch On-Demand instances instead.
    """
    iam_instance_profile: pulumi.Output[str]
    """
    The instance profile iam role.
    """
    image_id: pulumi.Output[str]
    """
    ID of the image used to launch the instances.
    """
    key_name: pulumi.Output[str]
    """
    The key pair to attach the instances.
    """
    max_size: pulumi.Output[int]
    """
    The upper limit of instances the cluster can scale up to.
    """
    min_size: pulumi.Output[int]
    """
    The lower limit of instances the cluster can scale down to.
    """
    name: pulumi.Output[str]
    """
    The cluster name.
    """
    region: pulumi.Output[str]
    """
    The region the cluster will run in.
    """
    security_groups: pulumi.Output[list]
    """
    One or more security group ids.
    """
    spot_percentage: pulumi.Output[float]
    """
    The percentage of Spot instances the cluster should maintain. Min 0, max 100.
    """
    subnet_ids: pulumi.Output[list]
    """
    A comma-separated list of subnet identifiers for the Ocean cluster. Subnet IDs should be configured with auto assign public ip.
    """
    tags: pulumi.Output[list]
    """
    Optionally adds tags to instances launched in an Ocean cluster.
    """
    user_data: pulumi.Output[str]
    """
    Base64-encoded MIME user data to make available to the instances.
    """
    utilize_reserved_instances: pulumi.Output[bool]
    """
    If Reserved instances exist, OCean will utilize them before launching Spot instances.
    """
    whitelists: pulumi.Output[list]
    """
    Instance types allowed in the Ocean cluster. Cannot be configured if `blacklist` is configured.
    """
    def __init__(__self__, resource_name, opts=None, autoscaler=None, blacklists=None, controller_id=None, desired_capacity=None, fallback_to_ondemand=None, iam_instance_profile=None, image_id=None, key_name=None, max_size=None, min_size=None, name=None, region=None, security_groups=None, spot_percentage=None, subnet_ids=None, tags=None, user_data=None, utilize_reserved_instances=None, whitelists=None, __name__=None, __opts__=None):
        """
        Provides a Spotinst Ocean AWS resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] autoscaler: Describes the Ocean Kubernetes autoscaler.
        :param pulumi.Input[list] blacklists: Instance types not allowed in the Ocean cluster. Cannot be configured if `whitelist` is configured.
        :param pulumi.Input[str] controller_id: The ocean cluster identifier. Example: `ocean.k8s`
        :param pulumi.Input[int] desired_capacity: The number of instances to launch and maintain in the cluster.
        :param pulumi.Input[bool] fallback_to_ondemand: If not Spot instance markets are available, enable Ocean to launch On-Demand instances instead.
        :param pulumi.Input[str] iam_instance_profile: The instance profile iam role.
        :param pulumi.Input[str] image_id: ID of the image used to launch the instances.
        :param pulumi.Input[str] key_name: The key pair to attach the instances.
        :param pulumi.Input[int] max_size: The upper limit of instances the cluster can scale up to.
        :param pulumi.Input[int] min_size: The lower limit of instances the cluster can scale down to.
        :param pulumi.Input[str] name: The cluster name.
        :param pulumi.Input[str] region: The region the cluster will run in.
        :param pulumi.Input[list] security_groups: One or more security group ids.
        :param pulumi.Input[float] spot_percentage: The percentage of Spot instances the cluster should maintain. Min 0, max 100.
        :param pulumi.Input[list] subnet_ids: A comma-separated list of subnet identifiers for the Ocean cluster. Subnet IDs should be configured with auto assign public ip.
        :param pulumi.Input[list] tags: Optionally adds tags to instances launched in an Ocean cluster.
        :param pulumi.Input[str] user_data: Base64-encoded MIME user data to make available to the instances.
        :param pulumi.Input[bool] utilize_reserved_instances: If Reserved instances exist, OCean will utilize them before launching Spot instances.
        :param pulumi.Input[list] whitelists: Instance types allowed in the Ocean cluster. Cannot be configured if `blacklist` is configured.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['autoscaler'] = autoscaler

        __props__['blacklists'] = blacklists

        __props__['controller_id'] = controller_id

        __props__['desired_capacity'] = desired_capacity

        __props__['fallback_to_ondemand'] = fallback_to_ondemand

        __props__['iam_instance_profile'] = iam_instance_profile

        __props__['image_id'] = image_id

        __props__['key_name'] = key_name

        __props__['max_size'] = max_size

        __props__['min_size'] = min_size

        __props__['name'] = name

        __props__['region'] = region

        if security_groups is None:
            raise TypeError('Missing required property security_groups')
        __props__['security_groups'] = security_groups

        __props__['spot_percentage'] = spot_percentage

        if subnet_ids is None:
            raise TypeError('Missing required property subnet_ids')
        __props__['subnet_ids'] = subnet_ids

        __props__['tags'] = tags

        __props__['user_data'] = user_data

        __props__['utilize_reserved_instances'] = utilize_reserved_instances

        __props__['whitelists'] = whitelists

        super(Ocean, __self__).__init__(
            'spotinst:aws/ocean:Ocean',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

