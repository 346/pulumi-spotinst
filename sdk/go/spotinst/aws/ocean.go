// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package aws

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Spotinst Ocean AWS resource.
type Ocean struct {
	s *pulumi.ResourceState
}

// NewOcean registers a new resource with the given unique name, arguments, and options.
func NewOcean(ctx *pulumi.Context,
	name string, args *OceanArgs, opts ...pulumi.ResourceOpt) (*Ocean, error) {
	if args == nil || args.SecurityGroups == nil {
		return nil, errors.New("missing required argument 'SecurityGroups'")
	}
	if args == nil || args.SubnetIds == nil {
		return nil, errors.New("missing required argument 'SubnetIds'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["autoscaler"] = nil
		inputs["blacklists"] = nil
		inputs["controllerId"] = nil
		inputs["desiredCapacity"] = nil
		inputs["fallbackToOndemand"] = nil
		inputs["iamInstanceProfile"] = nil
		inputs["imageId"] = nil
		inputs["keyName"] = nil
		inputs["maxSize"] = nil
		inputs["minSize"] = nil
		inputs["name"] = nil
		inputs["region"] = nil
		inputs["securityGroups"] = nil
		inputs["spotPercentage"] = nil
		inputs["subnetIds"] = nil
		inputs["tags"] = nil
		inputs["userData"] = nil
		inputs["utilizeReservedInstances"] = nil
		inputs["whitelists"] = nil
	} else {
		inputs["autoscaler"] = args.Autoscaler
		inputs["blacklists"] = args.Blacklists
		inputs["controllerId"] = args.ControllerId
		inputs["desiredCapacity"] = args.DesiredCapacity
		inputs["fallbackToOndemand"] = args.FallbackToOndemand
		inputs["iamInstanceProfile"] = args.IamInstanceProfile
		inputs["imageId"] = args.ImageId
		inputs["keyName"] = args.KeyName
		inputs["maxSize"] = args.MaxSize
		inputs["minSize"] = args.MinSize
		inputs["name"] = args.Name
		inputs["region"] = args.Region
		inputs["securityGroups"] = args.SecurityGroups
		inputs["spotPercentage"] = args.SpotPercentage
		inputs["subnetIds"] = args.SubnetIds
		inputs["tags"] = args.Tags
		inputs["userData"] = args.UserData
		inputs["utilizeReservedInstances"] = args.UtilizeReservedInstances
		inputs["whitelists"] = args.Whitelists
	}
	s, err := ctx.RegisterResource("spotinst:aws/ocean:Ocean", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Ocean{s: s}, nil
}

// GetOcean gets an existing Ocean resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetOcean(ctx *pulumi.Context,
	name string, id pulumi.ID, state *OceanState, opts ...pulumi.ResourceOpt) (*Ocean, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["autoscaler"] = state.Autoscaler
		inputs["blacklists"] = state.Blacklists
		inputs["controllerId"] = state.ControllerId
		inputs["desiredCapacity"] = state.DesiredCapacity
		inputs["fallbackToOndemand"] = state.FallbackToOndemand
		inputs["iamInstanceProfile"] = state.IamInstanceProfile
		inputs["imageId"] = state.ImageId
		inputs["keyName"] = state.KeyName
		inputs["maxSize"] = state.MaxSize
		inputs["minSize"] = state.MinSize
		inputs["name"] = state.Name
		inputs["region"] = state.Region
		inputs["securityGroups"] = state.SecurityGroups
		inputs["spotPercentage"] = state.SpotPercentage
		inputs["subnetIds"] = state.SubnetIds
		inputs["tags"] = state.Tags
		inputs["userData"] = state.UserData
		inputs["utilizeReservedInstances"] = state.UtilizeReservedInstances
		inputs["whitelists"] = state.Whitelists
	}
	s, err := ctx.ReadResource("spotinst:aws/ocean:Ocean", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Ocean{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Ocean) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Ocean) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Describes the Ocean Kubernetes autoscaler.
func (r *Ocean) Autoscaler() *pulumi.Output {
	return r.s.State["autoscaler"]
}

// Instance types not allowed in the Ocean cluster. Cannot be configured if `whitelist` is configured.
func (r *Ocean) Blacklists() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["blacklists"])
}

// The ocean cluster identifier. Example: `ocean.k8s`
func (r *Ocean) ControllerId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["controllerId"])
}

// The number of instances to launch and maintain in the cluster.
func (r *Ocean) DesiredCapacity() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["desiredCapacity"])
}

// If not Spot instance markets are available, enable Ocean to launch On-Demand instances instead.
func (r *Ocean) FallbackToOndemand() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["fallbackToOndemand"])
}

// The instance profile iam role.
func (r *Ocean) IamInstanceProfile() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["iamInstanceProfile"])
}

// ID of the image used to launch the instances.
func (r *Ocean) ImageId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["imageId"])
}

// The key pair to attach the instances.
func (r *Ocean) KeyName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["keyName"])
}

// The upper limit of instances the cluster can scale up to.
func (r *Ocean) MaxSize() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["maxSize"])
}

// The lower limit of instances the cluster can scale down to.
func (r *Ocean) MinSize() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["minSize"])
}

// The cluster name.
func (r *Ocean) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The region the cluster will run in.
func (r *Ocean) Region() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["region"])
}

// One or more security group ids.
func (r *Ocean) SecurityGroups() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["securityGroups"])
}

// The percentage of Spot instances the cluster should maintain. Min 0, max 100.
func (r *Ocean) SpotPercentage() *pulumi.Float64Output {
	return (*pulumi.Float64Output)(r.s.State["spotPercentage"])
}

// A comma-separated list of subnet identifiers for the Ocean cluster. Subnet IDs should be configured with auto assign public ip.
func (r *Ocean) SubnetIds() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["subnetIds"])
}

// Optionally adds tags to instances launched in an Ocean cluster.
func (r *Ocean) Tags() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["tags"])
}

// Base64-encoded MIME user data to make available to the instances.
func (r *Ocean) UserData() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["userData"])
}

// If Reserved instances exist, OCean will utilize them before launching Spot instances.
func (r *Ocean) UtilizeReservedInstances() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["utilizeReservedInstances"])
}

// Instance types allowed in the Ocean cluster. Cannot be configured if `blacklist` is configured.
func (r *Ocean) Whitelists() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["whitelists"])
}

// Input properties used for looking up and filtering Ocean resources.
type OceanState struct {
	// Describes the Ocean Kubernetes autoscaler.
	Autoscaler interface{}
	// Instance types not allowed in the Ocean cluster. Cannot be configured if `whitelist` is configured.
	Blacklists interface{}
	// The ocean cluster identifier. Example: `ocean.k8s`
	ControllerId interface{}
	// The number of instances to launch and maintain in the cluster.
	DesiredCapacity interface{}
	// If not Spot instance markets are available, enable Ocean to launch On-Demand instances instead.
	FallbackToOndemand interface{}
	// The instance profile iam role.
	IamInstanceProfile interface{}
	// ID of the image used to launch the instances.
	ImageId interface{}
	// The key pair to attach the instances.
	KeyName interface{}
	// The upper limit of instances the cluster can scale up to.
	MaxSize interface{}
	// The lower limit of instances the cluster can scale down to.
	MinSize interface{}
	// The cluster name.
	Name interface{}
	// The region the cluster will run in.
	Region interface{}
	// One or more security group ids.
	SecurityGroups interface{}
	// The percentage of Spot instances the cluster should maintain. Min 0, max 100.
	SpotPercentage interface{}
	// A comma-separated list of subnet identifiers for the Ocean cluster. Subnet IDs should be configured with auto assign public ip.
	SubnetIds interface{}
	// Optionally adds tags to instances launched in an Ocean cluster.
	Tags interface{}
	// Base64-encoded MIME user data to make available to the instances.
	UserData interface{}
	// If Reserved instances exist, OCean will utilize them before launching Spot instances.
	UtilizeReservedInstances interface{}
	// Instance types allowed in the Ocean cluster. Cannot be configured if `blacklist` is configured.
	Whitelists interface{}
}

// The set of arguments for constructing a Ocean resource.
type OceanArgs struct {
	// Describes the Ocean Kubernetes autoscaler.
	Autoscaler interface{}
	// Instance types not allowed in the Ocean cluster. Cannot be configured if `whitelist` is configured.
	Blacklists interface{}
	// The ocean cluster identifier. Example: `ocean.k8s`
	ControllerId interface{}
	// The number of instances to launch and maintain in the cluster.
	DesiredCapacity interface{}
	// If not Spot instance markets are available, enable Ocean to launch On-Demand instances instead.
	FallbackToOndemand interface{}
	// The instance profile iam role.
	IamInstanceProfile interface{}
	// ID of the image used to launch the instances.
	ImageId interface{}
	// The key pair to attach the instances.
	KeyName interface{}
	// The upper limit of instances the cluster can scale up to.
	MaxSize interface{}
	// The lower limit of instances the cluster can scale down to.
	MinSize interface{}
	// The cluster name.
	Name interface{}
	// The region the cluster will run in.
	Region interface{}
	// One or more security group ids.
	SecurityGroups interface{}
	// The percentage of Spot instances the cluster should maintain. Min 0, max 100.
	SpotPercentage interface{}
	// A comma-separated list of subnet identifiers for the Ocean cluster. Subnet IDs should be configured with auto assign public ip.
	SubnetIds interface{}
	// Optionally adds tags to instances launched in an Ocean cluster.
	Tags interface{}
	// Base64-encoded MIME user data to make available to the instances.
	UserData interface{}
	// If Reserved instances exist, OCean will utilize them before launching Spot instances.
	UtilizeReservedInstances interface{}
	// Instance types allowed in the Ocean cluster. Cannot be configured if `blacklist` is configured.
	Whitelists interface{}
}
