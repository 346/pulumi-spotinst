# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class Subscription(pulumi.CustomResource):
    endpoint: pulumi.Output[str]
    """
    The endpoint the notification will be sent to: url in case of `"http"`/`"https"`, email address in case of `"email"`/`"email-json"`, sns-topic-arn in case of `"aws-sns"`.
    """
    event_type: pulumi.Output[str]
    """
    The event to send the notification when triggered. Valid values: `"AWS_EC2_INSTANCE_TERMINATE"`, `"AWS_EC2_INSTANCE_TERMINATED"`, `"AWS_EC2_INSTANCE_LAUNCH"`, `"AWS_EC2_INSTANCE_UNHEALTHY_IN_ELB"`, `"GROUP_ROLL_FAILED"`, `"GROUP_ROLL_FINISHED"`, `"CANT_SCALE_UP_GROUP_MAX_CAPACITY"`, `"GROUP_UPDATED"`, `"AWS_EC2_CANT_SPIN_OD"`, `"AWS_EMR_PROVISION_TIMEOUT"`, `"AWS_EC2_INSTANCE_READY_SIGNAL_TIMEOUT"`. 
    """
    format: pulumi.Output[dict]
    """
    The format of the notification content (JSON Format - Key+Value). Valid values: `"%instance-id%"`, `"%event%"`, `"%resource-id%"`, `"%resource-name%"`.
    """
    protocol: pulumi.Output[str]
    """
    The protocol to send the notification. Valid values: `"http"`, `"https"`, `"email"`, `"email-json"`, `"aws-sns"`, `"web"`.
    """
    resource_id: pulumi.Output[str]
    """
    Spotinst Resource ID (Elastigroup ID).
    """
    def __init__(__self__, resource_name, opts=None, endpoint=None, event_type=None, format=None, protocol=None, resource_id=None, __name__=None, __opts__=None):
        """
        Provides a Spotinst subscription resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] endpoint: The endpoint the notification will be sent to: url in case of `"http"`/`"https"`, email address in case of `"email"`/`"email-json"`, sns-topic-arn in case of `"aws-sns"`.
        :param pulumi.Input[str] event_type: The event to send the notification when triggered. Valid values: `"AWS_EC2_INSTANCE_TERMINATE"`, `"AWS_EC2_INSTANCE_TERMINATED"`, `"AWS_EC2_INSTANCE_LAUNCH"`, `"AWS_EC2_INSTANCE_UNHEALTHY_IN_ELB"`, `"GROUP_ROLL_FAILED"`, `"GROUP_ROLL_FINISHED"`, `"CANT_SCALE_UP_GROUP_MAX_CAPACITY"`, `"GROUP_UPDATED"`, `"AWS_EC2_CANT_SPIN_OD"`, `"AWS_EMR_PROVISION_TIMEOUT"`, `"AWS_EC2_INSTANCE_READY_SIGNAL_TIMEOUT"`. 
        :param pulumi.Input[dict] format: The format of the notification content (JSON Format - Key+Value). Valid values: `"%instance-id%"`, `"%event%"`, `"%resource-id%"`, `"%resource-name%"`.
        :param pulumi.Input[str] protocol: The protocol to send the notification. Valid values: `"http"`, `"https"`, `"email"`, `"email-json"`, `"aws-sns"`, `"web"`.
        :param pulumi.Input[str] resource_id: Spotinst Resource ID (Elastigroup ID).
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

        if endpoint is None:
            raise TypeError('Missing required property endpoint')
        __props__['endpoint'] = endpoint

        if event_type is None:
            raise TypeError('Missing required property event_type')
        __props__['event_type'] = event_type

        __props__['format'] = format

        if protocol is None:
            raise TypeError('Missing required property protocol')
        __props__['protocol'] = protocol

        if resource_id is None:
            raise TypeError('Missing required property resource_id')
        __props__['resource_id'] = resource_id

        super(Subscription, __self__).__init__(
            'spotinst:index/subscription:Subscription',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

