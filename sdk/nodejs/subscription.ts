// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Subscription extends pulumi.CustomResource {
    /**
     * Get an existing Subscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubscriptionState, opts?: pulumi.CustomResourceOptions): Subscription {
        return new Subscription(name, <any>state, { ...opts, id: id });
    }

    public readonly endpoint: pulumi.Output<string>;
    public readonly eventType: pulumi.Output<string>;
    public readonly format: pulumi.Output<{[key: string]: any} | undefined>;
    public readonly protocol: pulumi.Output<string>;
    public readonly resourceId: pulumi.Output<string>;

    /**
     * Create a Subscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubscriptionArgs | SubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SubscriptionState = argsOrState as SubscriptionState | undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["eventType"] = state ? state.eventType : undefined;
            inputs["format"] = state ? state.format : undefined;
            inputs["protocol"] = state ? state.protocol : undefined;
            inputs["resourceId"] = state ? state.resourceId : undefined;
        } else {
            const args = argsOrState as SubscriptionArgs | undefined;
            if (!args || args.endpoint === undefined) {
                throw new Error("Missing required property 'endpoint'");
            }
            if (!args || args.eventType === undefined) {
                throw new Error("Missing required property 'eventType'");
            }
            if (!args || args.protocol === undefined) {
                throw new Error("Missing required property 'protocol'");
            }
            if (!args || args.resourceId === undefined) {
                throw new Error("Missing required property 'resourceId'");
            }
            inputs["endpoint"] = args ? args.endpoint : undefined;
            inputs["eventType"] = args ? args.eventType : undefined;
            inputs["format"] = args ? args.format : undefined;
            inputs["protocol"] = args ? args.protocol : undefined;
            inputs["resourceId"] = args ? args.resourceId : undefined;
        }
        super("spotinst:index/subscription:Subscription", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Subscription resources.
 */
export interface SubscriptionState {
    readonly endpoint?: pulumi.Input<string>;
    readonly eventType?: pulumi.Input<string>;
    readonly format?: pulumi.Input<{[key: string]: any}>;
    readonly protocol?: pulumi.Input<string>;
    readonly resourceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Subscription resource.
 */
export interface SubscriptionArgs {
    readonly endpoint: pulumi.Input<string>;
    readonly eventType: pulumi.Input<string>;
    readonly format?: pulumi.Input<{[key: string]: any}>;
    readonly protocol: pulumi.Input<string>;
    readonly resourceId: pulumi.Input<string>;
}