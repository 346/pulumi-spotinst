# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Elastigroup(pulumi.CustomResource):
    desired_capacity: pulumi.Output[int]
    """
    The desired number of instances the group should have at any time.
    """
    health_check: pulumi.Output[dict]
    """
    Describes the health check configuration.
    """
    images: pulumi.Output[list]
    """
    Image of a VM. An image is a template for creating new VMs. Choose from Azure image catalogue (marketplace) or use a custom image.
    """
    load_balancers: pulumi.Output[list]
    """
    Describes a set of one or more classic load balancer target groups and/or Multai load balancer target sets.
    """
    login: pulumi.Output[dict]
    """
    Describes the login configuration.
    """
    low_priority_sizes: pulumi.Output[list]
    """
    Available Low-Priority sizes.
    """
    max_size: pulumi.Output[int]
    """
    The maximum number of instances the group should have at any time.
    """
    min_size: pulumi.Output[int]
    """
    The minimum number of instances the group should have at any time.
    """
    name: pulumi.Output[str]
    """
    The group name.
    """
    network: pulumi.Output[dict]
    """
    Defines the Virtual Network and Subnet for your Elastigroup.
    """
    od_sizes: pulumi.Output[list]
    """
    Available On-Demand sizes
    """
    product: pulumi.Output[str]
    """
    Operation system type. Valid values: `"Linux"`, `"Windows"`.
    """
    region: pulumi.Output[str]
    """
    The region your Azure group will be created in.
    """
    resource_group_name: pulumi.Output[str]
    """
    Vnet Resource Group Name.
    """
    scheduled_tasks: pulumi.Output[list]
    """
    Describes the configuration of one or more scheduled tasks.
    """
    strategy: pulumi.Output[dict]
    """
    Describes the deployment strategy.
    """
    user_data: pulumi.Output[str]
    """
    Base64-encoded MIME user data to make available to the instances.
    """
    def __init__(__self__, resource_name, opts=None, desired_capacity=None, health_check=None, images=None, load_balancers=None, login=None, low_priority_sizes=None, max_size=None, min_size=None, name=None, network=None, od_sizes=None, product=None, region=None, resource_group_name=None, scheduled_tasks=None, strategy=None, user_data=None, __name__=None, __opts__=None):
        """
        Provides a Spotinst elastigroup Azure resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[int] desired_capacity: The desired number of instances the group should have at any time.
        :param pulumi.Input[dict] health_check: Describes the health check configuration.
        :param pulumi.Input[list] images: Image of a VM. An image is a template for creating new VMs. Choose from Azure image catalogue (marketplace) or use a custom image.
        :param pulumi.Input[list] load_balancers: Describes a set of one or more classic load balancer target groups and/or Multai load balancer target sets.
        :param pulumi.Input[dict] login: Describes the login configuration.
        :param pulumi.Input[list] low_priority_sizes: Available Low-Priority sizes.
        :param pulumi.Input[int] max_size: The maximum number of instances the group should have at any time.
        :param pulumi.Input[int] min_size: The minimum number of instances the group should have at any time.
        :param pulumi.Input[str] name: The group name.
        :param pulumi.Input[dict] network: Defines the Virtual Network and Subnet for your Elastigroup.
        :param pulumi.Input[list] od_sizes: Available On-Demand sizes
        :param pulumi.Input[str] product: Operation system type. Valid values: `"Linux"`, `"Windows"`.
        :param pulumi.Input[str] region: The region your Azure group will be created in.
        :param pulumi.Input[str] resource_group_name: Vnet Resource Group Name.
        :param pulumi.Input[list] scheduled_tasks: Describes the configuration of one or more scheduled tasks.
        :param pulumi.Input[dict] strategy: Describes the deployment strategy.
        :param pulumi.Input[str] user_data: Base64-encoded MIME user data to make available to the instances.
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

        __props__['desired_capacity'] = desired_capacity

        __props__['health_check'] = health_check

        __props__['images'] = images

        __props__['load_balancers'] = load_balancers

        __props__['login'] = login

        if low_priority_sizes is None:
            raise TypeError('Missing required property low_priority_sizes')
        __props__['low_priority_sizes'] = low_priority_sizes

        __props__['max_size'] = max_size

        __props__['min_size'] = min_size

        if name is None:
            raise TypeError('Missing required property name')
        __props__['name'] = name

        if network is None:
            raise TypeError('Missing required property network')
        __props__['network'] = network

        if od_sizes is None:
            raise TypeError('Missing required property od_sizes')
        __props__['od_sizes'] = od_sizes

        if product is None:
            raise TypeError('Missing required property product')
        __props__['product'] = product

        if region is None:
            raise TypeError('Missing required property region')
        __props__['region'] = region

        if resource_group_name is None:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['scheduled_tasks'] = scheduled_tasks

        if strategy is None:
            raise TypeError('Missing required property strategy')
        __props__['strategy'] = strategy

        __props__['user_data'] = user_data

        super(Elastigroup, __self__).__init__(
            'spotinst:azure/elastigroup:Elastigroup',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
