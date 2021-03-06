# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class RoutingRule(pulumi.CustomResource):
    balancer_id: pulumi.Output[str]
    """
    The ID of the balancer.
    """
    listener_id: pulumi.Output[str]
    """
    The ID of the listener.
    """
    middleware_ids: pulumi.Output[list]
    priority: pulumi.Output[int]
    route: pulumi.Output[str]
    """
    Route defines a simple language for matching HTTP requests and route the traffic accordingly. Route provides series of matchers that follow the syntax: Path matcher: — Path("/foo/bar") // trie-based PathRegexp(“/foo/.*”) // regexp-based Method matcher: — Method(“GET”) // trie-based MethodRegexp(“POST|PUT”) // regexp based Header matcher: — Header(“Content-Type”, “application/json”) // trie-based HeaderRegexp(“Content-Type”, “application/.*”) // regexp based Matchers can be combined using && operator: — Method(“POST”) && Path("/v1")
    """
    strategy: pulumi.Output[str]
    """
    Balancing strategy. Valid values: `ROUNDROBIN`, `RANDOM`, `LEASTCONN`, `IPHASH`.
    """
    tags: pulumi.Output[list]
    """
    A list of key:value paired tags.
    """
    target_set_ids: pulumi.Output[list]
    def __init__(__self__, resource_name, opts=None, balancer_id=None, listener_id=None, middleware_ids=None, priority=None, route=None, strategy=None, tags=None, target_set_ids=None, __name__=None, __opts__=None):
        """
        Provides a Spotinst Multai Routing Rule.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] balancer_id: The ID of the balancer.
        :param pulumi.Input[str] listener_id: The ID of the listener.
        :param pulumi.Input[list] middleware_ids
        :param pulumi.Input[int] priority
        :param pulumi.Input[str] route: Route defines a simple language for matching HTTP requests and route the traffic accordingly. Route provides series of matchers that follow the syntax: Path matcher: — Path("/foo/bar") // trie-based PathRegexp(“/foo/.*”) // regexp-based Method matcher: — Method(“GET”) // trie-based MethodRegexp(“POST|PUT”) // regexp based Header matcher: — Header(“Content-Type”, “application/json”) // trie-based HeaderRegexp(“Content-Type”, “application/.*”) // regexp based Matchers can be combined using && operator: — Method(“POST”) && Path("/v1")
        :param pulumi.Input[str] strategy: Balancing strategy. Valid values: `ROUNDROBIN`, `RANDOM`, `LEASTCONN`, `IPHASH`.
        :param pulumi.Input[list] tags: A list of key:value paired tags.
        :param pulumi.Input[list] target_set_ids
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

        if balancer_id is None:
            raise TypeError('Missing required property balancer_id')
        __props__['balancer_id'] = balancer_id

        if listener_id is None:
            raise TypeError('Missing required property listener_id')
        __props__['listener_id'] = listener_id

        __props__['middleware_ids'] = middleware_ids

        __props__['priority'] = priority

        if route is None:
            raise TypeError('Missing required property route')
        __props__['route'] = route

        __props__['strategy'] = strategy

        __props__['tags'] = tags

        if target_set_ids is None:
            raise TypeError('Missing required property target_set_ids')
        __props__['target_set_ids'] = target_set_ids

        super(RoutingRule, __self__).__init__(
            'spotinst:multai/routingRule:RoutingRule',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

