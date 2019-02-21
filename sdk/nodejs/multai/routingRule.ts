// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class RoutingRule extends pulumi.CustomResource {
    /**
     * Get an existing RoutingRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoutingRuleState, opts?: pulumi.CustomResourceOptions): RoutingRule {
        return new RoutingRule(name, <any>state, { ...opts, id: id });
    }

    public readonly balancerId: pulumi.Output<string>;
    public readonly listenerId: pulumi.Output<string>;
    public readonly middlewareIds: pulumi.Output<string[] | undefined>;
    public readonly priority: pulumi.Output<number | undefined>;
    public readonly route: pulumi.Output<string>;
    public readonly strategy: pulumi.Output<string | undefined>;
    public readonly tags: pulumi.Output<{ key: string, value: string }[] | undefined>;
    public readonly targetSetIds: pulumi.Output<string[]>;

    /**
     * Create a RoutingRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoutingRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RoutingRuleArgs | RoutingRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: RoutingRuleState = argsOrState as RoutingRuleState | undefined;
            inputs["balancerId"] = state ? state.balancerId : undefined;
            inputs["listenerId"] = state ? state.listenerId : undefined;
            inputs["middlewareIds"] = state ? state.middlewareIds : undefined;
            inputs["priority"] = state ? state.priority : undefined;
            inputs["route"] = state ? state.route : undefined;
            inputs["strategy"] = state ? state.strategy : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["targetSetIds"] = state ? state.targetSetIds : undefined;
        } else {
            const args = argsOrState as RoutingRuleArgs | undefined;
            if (!args || args.balancerId === undefined) {
                throw new Error("Missing required property 'balancerId'");
            }
            if (!args || args.listenerId === undefined) {
                throw new Error("Missing required property 'listenerId'");
            }
            if (!args || args.route === undefined) {
                throw new Error("Missing required property 'route'");
            }
            if (!args || args.targetSetIds === undefined) {
                throw new Error("Missing required property 'targetSetIds'");
            }
            inputs["balancerId"] = args ? args.balancerId : undefined;
            inputs["listenerId"] = args ? args.listenerId : undefined;
            inputs["middlewareIds"] = args ? args.middlewareIds : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["route"] = args ? args.route : undefined;
            inputs["strategy"] = args ? args.strategy : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["targetSetIds"] = args ? args.targetSetIds : undefined;
        }
        super("spotinst:multai/routingRule:RoutingRule", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RoutingRule resources.
 */
export interface RoutingRuleState {
    readonly balancerId?: pulumi.Input<string>;
    readonly listenerId?: pulumi.Input<string>;
    readonly middlewareIds?: pulumi.Input<pulumi.Input<string>[]>;
    readonly priority?: pulumi.Input<number>;
    readonly route?: pulumi.Input<string>;
    readonly strategy?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<pulumi.Input<{ key: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    readonly targetSetIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a RoutingRule resource.
 */
export interface RoutingRuleArgs {
    readonly balancerId: pulumi.Input<string>;
    readonly listenerId: pulumi.Input<string>;
    readonly middlewareIds?: pulumi.Input<pulumi.Input<string>[]>;
    readonly priority?: pulumi.Input<number>;
    readonly route: pulumi.Input<string>;
    readonly strategy?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<pulumi.Input<{ key: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    readonly targetSetIds: pulumi.Input<pulumi.Input<string>[]>;
}