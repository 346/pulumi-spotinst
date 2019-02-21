// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class MrScalar extends pulumi.CustomResource {
    /**
     * Get an existing MrScalar resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MrScalarState, opts?: pulumi.CustomResourceOptions): MrScalar {
        return new MrScalar(name, <any>state, { ...opts, id: id });
    }

    public readonly additionalInfo: pulumi.Output<string | undefined>;
    public readonly additionalPrimarySecurityGroups: pulumi.Output<string[] | undefined>;
    public readonly additionalReplicaSecurityGroups: pulumi.Output<string[] | undefined>;
    public readonly applications: pulumi.Output<{ args?: string[], name: string, version?: string }[] | undefined>;
    public readonly availabilityZones: pulumi.Output<string[] | undefined>;
    public readonly bootstrapActionsFiles: pulumi.Output<{ bucket: string, key: string }[] | undefined>;
    public readonly clusterId: pulumi.Output<string | undefined>;
    public readonly configurationsFiles: pulumi.Output<{ bucket: string, key: string }[] | undefined>;
    public readonly coreDesiredCapacity: pulumi.Output<number | undefined>;
    public readonly coreEbsBlockDevices: pulumi.Output<{ iops?: number, sizeInGb: number, volumeType: string, volumesPerInstance?: number }[] | undefined>;
    public readonly coreEbsOptimized: pulumi.Output<boolean | undefined>;
    public readonly coreInstanceTypes: pulumi.Output<string[] | undefined>;
    public readonly coreLifecycle: pulumi.Output<string | undefined>;
    public readonly coreMaxSize: pulumi.Output<number | undefined>;
    public readonly coreMinSize: pulumi.Output<number | undefined>;
    public readonly coreScalingDownPolicies: pulumi.Output<{ actionType?: string, adjustment?: string, cooldown: number, dimensions?: {[key: string]: any}, evaluationPeriods: number, maxTargetCapacity?: string, maximum?: string, metricName: string, minTargetCapacity?: string, minimum?: string, namespace: string, operator: string, period: number, policyName: string, statistic: string, target?: string, threshold: number, unit: string }[] | undefined>;
    public readonly coreScalingUpPolicies: pulumi.Output<{ actionType?: string, adjustment?: string, cooldown: number, dimensions?: {[key: string]: any}, evaluationPeriods: number, maxTargetCapacity?: string, maximum?: string, metricName: string, minTargetCapacity?: string, minimum?: string, namespace: string, operator: string, period: number, policyName: string, statistic: string, target?: string, threshold: number, unit: string }[] | undefined>;
    public readonly customAmiId: pulumi.Output<string | undefined>;
    public readonly description: pulumi.Output<string | undefined>;
    public readonly ebsRootVolumeSize: pulumi.Output<number | undefined>;
    public readonly ec2KeyName: pulumi.Output<string | undefined>;
    public readonly exposeClusterId: pulumi.Output<boolean | undefined>;
    public readonly jobFlowRole: pulumi.Output<string | undefined>;
    public readonly keepJobFlowAlive: pulumi.Output<boolean | undefined>;
    public readonly logUri: pulumi.Output<string | undefined>;
    public readonly managedPrimarySecurityGroup: pulumi.Output<string | undefined>;
    public readonly managedReplicaSecurityGroup: pulumi.Output<string | undefined>;
    public readonly masterEbsBlockDevices: pulumi.Output<{ iops?: number, sizeInGb: number, volumeType: string, volumesPerInstance?: number }[] | undefined>;
    public readonly masterEbsOptimized: pulumi.Output<boolean | undefined>;
    public readonly masterInstanceTypes: pulumi.Output<string[] | undefined>;
    public readonly masterLifecycle: pulumi.Output<string | undefined>;
    public readonly name: pulumi.Output<string>;
    public /*out*/ readonly outputClusterId: pulumi.Output<string>;
    public readonly provisioningTimeout: pulumi.Output<{ timeout: number, timeoutAction: string } | undefined>;
    public readonly region: pulumi.Output<string | undefined>;
    public readonly releaseLabel: pulumi.Output<string | undefined>;
    public readonly repoUpgradeOnBoot: pulumi.Output<string | undefined>;
    public readonly retries: pulumi.Output<number | undefined>;
    public readonly scheduledTasks: pulumi.Output<{ cron: string, desiredCapacity?: string, instanceGroupType: string, isEnabled?: boolean, maxCapacity?: string, minCapacity?: string, taskType: string }[] | undefined>;
    public readonly securityConfig: pulumi.Output<string | undefined>;
    public readonly serviceAccessSecurityGroup: pulumi.Output<string | undefined>;
    public readonly serviceRole: pulumi.Output<string | undefined>;
    public readonly stepsFiles: pulumi.Output<{ bucket: string, key: string }[] | undefined>;
    public readonly strategy: pulumi.Output<string>;
    public readonly tags: pulumi.Output<{ key: string, value: string }[] | undefined>;
    public readonly taskDesiredCapacity: pulumi.Output<number | undefined>;
    public readonly taskEbsBlockDevices: pulumi.Output<{ iops?: number, sizeInGb: number, volumeType: string, volumesPerInstance?: number }[] | undefined>;
    public readonly taskEbsOptimized: pulumi.Output<boolean | undefined>;
    public readonly taskInstanceTypes: pulumi.Output<string[] | undefined>;
    public readonly taskLifecycle: pulumi.Output<string | undefined>;
    public readonly taskMaxSize: pulumi.Output<number | undefined>;
    public readonly taskMinSize: pulumi.Output<number | undefined>;
    public readonly taskScalingDownPolicies: pulumi.Output<{ actionType?: string, adjustment?: string, cooldown: number, dimensions?: {[key: string]: any}, evaluationPeriods: number, maxTargetCapacity?: string, maximum?: string, metricName: string, minTargetCapacity?: string, minimum?: string, namespace: string, operator: string, period: number, policyName: string, statistic: string, target?: string, threshold: number, unit: string }[] | undefined>;
    public readonly taskScalingUpPolicies: pulumi.Output<{ actionType?: string, adjustment?: string, cooldown: number, dimensions?: {[key: string]: any}, evaluationPeriods: number, maxTargetCapacity?: string, maximum?: string, metricName: string, minTargetCapacity?: string, minimum?: string, namespace: string, operator: string, period: number, policyName: string, statistic: string, target?: string, threshold: number, unit: string }[] | undefined>;
    public readonly terminationProtected: pulumi.Output<boolean | undefined>;
    public readonly visibleToAllUsers: pulumi.Output<boolean | undefined>;

    /**
     * Create a MrScalar resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MrScalarArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MrScalarArgs | MrScalarState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: MrScalarState = argsOrState as MrScalarState | undefined;
            inputs["additionalInfo"] = state ? state.additionalInfo : undefined;
            inputs["additionalPrimarySecurityGroups"] = state ? state.additionalPrimarySecurityGroups : undefined;
            inputs["additionalReplicaSecurityGroups"] = state ? state.additionalReplicaSecurityGroups : undefined;
            inputs["applications"] = state ? state.applications : undefined;
            inputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            inputs["bootstrapActionsFiles"] = state ? state.bootstrapActionsFiles : undefined;
            inputs["clusterId"] = state ? state.clusterId : undefined;
            inputs["configurationsFiles"] = state ? state.configurationsFiles : undefined;
            inputs["coreDesiredCapacity"] = state ? state.coreDesiredCapacity : undefined;
            inputs["coreEbsBlockDevices"] = state ? state.coreEbsBlockDevices : undefined;
            inputs["coreEbsOptimized"] = state ? state.coreEbsOptimized : undefined;
            inputs["coreInstanceTypes"] = state ? state.coreInstanceTypes : undefined;
            inputs["coreLifecycle"] = state ? state.coreLifecycle : undefined;
            inputs["coreMaxSize"] = state ? state.coreMaxSize : undefined;
            inputs["coreMinSize"] = state ? state.coreMinSize : undefined;
            inputs["coreScalingDownPolicies"] = state ? state.coreScalingDownPolicies : undefined;
            inputs["coreScalingUpPolicies"] = state ? state.coreScalingUpPolicies : undefined;
            inputs["customAmiId"] = state ? state.customAmiId : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["ebsRootVolumeSize"] = state ? state.ebsRootVolumeSize : undefined;
            inputs["ec2KeyName"] = state ? state.ec2KeyName : undefined;
            inputs["exposeClusterId"] = state ? state.exposeClusterId : undefined;
            inputs["jobFlowRole"] = state ? state.jobFlowRole : undefined;
            inputs["keepJobFlowAlive"] = state ? state.keepJobFlowAlive : undefined;
            inputs["logUri"] = state ? state.logUri : undefined;
            inputs["managedPrimarySecurityGroup"] = state ? state.managedPrimarySecurityGroup : undefined;
            inputs["managedReplicaSecurityGroup"] = state ? state.managedReplicaSecurityGroup : undefined;
            inputs["masterEbsBlockDevices"] = state ? state.masterEbsBlockDevices : undefined;
            inputs["masterEbsOptimized"] = state ? state.masterEbsOptimized : undefined;
            inputs["masterInstanceTypes"] = state ? state.masterInstanceTypes : undefined;
            inputs["masterLifecycle"] = state ? state.masterLifecycle : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["outputClusterId"] = state ? state.outputClusterId : undefined;
            inputs["provisioningTimeout"] = state ? state.provisioningTimeout : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["releaseLabel"] = state ? state.releaseLabel : undefined;
            inputs["repoUpgradeOnBoot"] = state ? state.repoUpgradeOnBoot : undefined;
            inputs["retries"] = state ? state.retries : undefined;
            inputs["scheduledTasks"] = state ? state.scheduledTasks : undefined;
            inputs["securityConfig"] = state ? state.securityConfig : undefined;
            inputs["serviceAccessSecurityGroup"] = state ? state.serviceAccessSecurityGroup : undefined;
            inputs["serviceRole"] = state ? state.serviceRole : undefined;
            inputs["stepsFiles"] = state ? state.stepsFiles : undefined;
            inputs["strategy"] = state ? state.strategy : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["taskDesiredCapacity"] = state ? state.taskDesiredCapacity : undefined;
            inputs["taskEbsBlockDevices"] = state ? state.taskEbsBlockDevices : undefined;
            inputs["taskEbsOptimized"] = state ? state.taskEbsOptimized : undefined;
            inputs["taskInstanceTypes"] = state ? state.taskInstanceTypes : undefined;
            inputs["taskLifecycle"] = state ? state.taskLifecycle : undefined;
            inputs["taskMaxSize"] = state ? state.taskMaxSize : undefined;
            inputs["taskMinSize"] = state ? state.taskMinSize : undefined;
            inputs["taskScalingDownPolicies"] = state ? state.taskScalingDownPolicies : undefined;
            inputs["taskScalingUpPolicies"] = state ? state.taskScalingUpPolicies : undefined;
            inputs["terminationProtected"] = state ? state.terminationProtected : undefined;
            inputs["visibleToAllUsers"] = state ? state.visibleToAllUsers : undefined;
        } else {
            const args = argsOrState as MrScalarArgs | undefined;
            if (!args || args.name === undefined) {
                throw new Error("Missing required property 'name'");
            }
            if (!args || args.strategy === undefined) {
                throw new Error("Missing required property 'strategy'");
            }
            inputs["additionalInfo"] = args ? args.additionalInfo : undefined;
            inputs["additionalPrimarySecurityGroups"] = args ? args.additionalPrimarySecurityGroups : undefined;
            inputs["additionalReplicaSecurityGroups"] = args ? args.additionalReplicaSecurityGroups : undefined;
            inputs["applications"] = args ? args.applications : undefined;
            inputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            inputs["bootstrapActionsFiles"] = args ? args.bootstrapActionsFiles : undefined;
            inputs["clusterId"] = args ? args.clusterId : undefined;
            inputs["configurationsFiles"] = args ? args.configurationsFiles : undefined;
            inputs["coreDesiredCapacity"] = args ? args.coreDesiredCapacity : undefined;
            inputs["coreEbsBlockDevices"] = args ? args.coreEbsBlockDevices : undefined;
            inputs["coreEbsOptimized"] = args ? args.coreEbsOptimized : undefined;
            inputs["coreInstanceTypes"] = args ? args.coreInstanceTypes : undefined;
            inputs["coreLifecycle"] = args ? args.coreLifecycle : undefined;
            inputs["coreMaxSize"] = args ? args.coreMaxSize : undefined;
            inputs["coreMinSize"] = args ? args.coreMinSize : undefined;
            inputs["coreScalingDownPolicies"] = args ? args.coreScalingDownPolicies : undefined;
            inputs["coreScalingUpPolicies"] = args ? args.coreScalingUpPolicies : undefined;
            inputs["customAmiId"] = args ? args.customAmiId : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["ebsRootVolumeSize"] = args ? args.ebsRootVolumeSize : undefined;
            inputs["ec2KeyName"] = args ? args.ec2KeyName : undefined;
            inputs["exposeClusterId"] = args ? args.exposeClusterId : undefined;
            inputs["jobFlowRole"] = args ? args.jobFlowRole : undefined;
            inputs["keepJobFlowAlive"] = args ? args.keepJobFlowAlive : undefined;
            inputs["logUri"] = args ? args.logUri : undefined;
            inputs["managedPrimarySecurityGroup"] = args ? args.managedPrimarySecurityGroup : undefined;
            inputs["managedReplicaSecurityGroup"] = args ? args.managedReplicaSecurityGroup : undefined;
            inputs["masterEbsBlockDevices"] = args ? args.masterEbsBlockDevices : undefined;
            inputs["masterEbsOptimized"] = args ? args.masterEbsOptimized : undefined;
            inputs["masterInstanceTypes"] = args ? args.masterInstanceTypes : undefined;
            inputs["masterLifecycle"] = args ? args.masterLifecycle : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["provisioningTimeout"] = args ? args.provisioningTimeout : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["releaseLabel"] = args ? args.releaseLabel : undefined;
            inputs["repoUpgradeOnBoot"] = args ? args.repoUpgradeOnBoot : undefined;
            inputs["retries"] = args ? args.retries : undefined;
            inputs["scheduledTasks"] = args ? args.scheduledTasks : undefined;
            inputs["securityConfig"] = args ? args.securityConfig : undefined;
            inputs["serviceAccessSecurityGroup"] = args ? args.serviceAccessSecurityGroup : undefined;
            inputs["serviceRole"] = args ? args.serviceRole : undefined;
            inputs["stepsFiles"] = args ? args.stepsFiles : undefined;
            inputs["strategy"] = args ? args.strategy : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["taskDesiredCapacity"] = args ? args.taskDesiredCapacity : undefined;
            inputs["taskEbsBlockDevices"] = args ? args.taskEbsBlockDevices : undefined;
            inputs["taskEbsOptimized"] = args ? args.taskEbsOptimized : undefined;
            inputs["taskInstanceTypes"] = args ? args.taskInstanceTypes : undefined;
            inputs["taskLifecycle"] = args ? args.taskLifecycle : undefined;
            inputs["taskMaxSize"] = args ? args.taskMaxSize : undefined;
            inputs["taskMinSize"] = args ? args.taskMinSize : undefined;
            inputs["taskScalingDownPolicies"] = args ? args.taskScalingDownPolicies : undefined;
            inputs["taskScalingUpPolicies"] = args ? args.taskScalingUpPolicies : undefined;
            inputs["terminationProtected"] = args ? args.terminationProtected : undefined;
            inputs["visibleToAllUsers"] = args ? args.visibleToAllUsers : undefined;
            inputs["outputClusterId"] = undefined /*out*/;
        }
        super("spotinst:aws/mrScalar:MrScalar", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering MrScalar resources.
 */
export interface MrScalarState {
    readonly additionalInfo?: pulumi.Input<string>;
    readonly additionalPrimarySecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    readonly additionalReplicaSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    readonly applications?: pulumi.Input<pulumi.Input<{ args?: pulumi.Input<pulumi.Input<string>[]>, name: pulumi.Input<string>, version?: pulumi.Input<string> }>[]>;
    readonly availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    readonly bootstrapActionsFiles?: pulumi.Input<pulumi.Input<{ bucket: pulumi.Input<string>, key: pulumi.Input<string> }>[]>;
    readonly clusterId?: pulumi.Input<string>;
    readonly configurationsFiles?: pulumi.Input<pulumi.Input<{ bucket: pulumi.Input<string>, key: pulumi.Input<string> }>[]>;
    readonly coreDesiredCapacity?: pulumi.Input<number>;
    readonly coreEbsBlockDevices?: pulumi.Input<pulumi.Input<{ iops?: pulumi.Input<number>, sizeInGb: pulumi.Input<number>, volumeType: pulumi.Input<string>, volumesPerInstance?: pulumi.Input<number> }>[]>;
    readonly coreEbsOptimized?: pulumi.Input<boolean>;
    readonly coreInstanceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly coreLifecycle?: pulumi.Input<string>;
    readonly coreMaxSize?: pulumi.Input<number>;
    readonly coreMinSize?: pulumi.Input<number>;
    readonly coreScalingDownPolicies?: pulumi.Input<pulumi.Input<{ actionType?: pulumi.Input<string>, adjustment?: pulumi.Input<string>, cooldown?: pulumi.Input<number>, dimensions?: pulumi.Input<{[key: string]: any}>, evaluationPeriods?: pulumi.Input<number>, maxTargetCapacity?: pulumi.Input<string>, maximum?: pulumi.Input<string>, metricName: pulumi.Input<string>, minTargetCapacity?: pulumi.Input<string>, minimum?: pulumi.Input<string>, namespace: pulumi.Input<string>, operator?: pulumi.Input<string>, period?: pulumi.Input<number>, policyName: pulumi.Input<string>, statistic?: pulumi.Input<string>, target?: pulumi.Input<string>, threshold: pulumi.Input<number>, unit: pulumi.Input<string> }>[]>;
    readonly coreScalingUpPolicies?: pulumi.Input<pulumi.Input<{ actionType?: pulumi.Input<string>, adjustment?: pulumi.Input<string>, cooldown?: pulumi.Input<number>, dimensions?: pulumi.Input<{[key: string]: any}>, evaluationPeriods?: pulumi.Input<number>, maxTargetCapacity?: pulumi.Input<string>, maximum?: pulumi.Input<string>, metricName: pulumi.Input<string>, minTargetCapacity?: pulumi.Input<string>, minimum?: pulumi.Input<string>, namespace: pulumi.Input<string>, operator?: pulumi.Input<string>, period?: pulumi.Input<number>, policyName: pulumi.Input<string>, statistic?: pulumi.Input<string>, target?: pulumi.Input<string>, threshold: pulumi.Input<number>, unit: pulumi.Input<string> }>[]>;
    readonly customAmiId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly ebsRootVolumeSize?: pulumi.Input<number>;
    readonly ec2KeyName?: pulumi.Input<string>;
    readonly exposeClusterId?: pulumi.Input<boolean>;
    readonly jobFlowRole?: pulumi.Input<string>;
    readonly keepJobFlowAlive?: pulumi.Input<boolean>;
    readonly logUri?: pulumi.Input<string>;
    readonly managedPrimarySecurityGroup?: pulumi.Input<string>;
    readonly managedReplicaSecurityGroup?: pulumi.Input<string>;
    readonly masterEbsBlockDevices?: pulumi.Input<pulumi.Input<{ iops?: pulumi.Input<number>, sizeInGb: pulumi.Input<number>, volumeType: pulumi.Input<string>, volumesPerInstance?: pulumi.Input<number> }>[]>;
    readonly masterEbsOptimized?: pulumi.Input<boolean>;
    readonly masterInstanceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly masterLifecycle?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly outputClusterId?: pulumi.Input<string>;
    readonly provisioningTimeout?: pulumi.Input<{ timeout: pulumi.Input<number>, timeoutAction: pulumi.Input<string> }>;
    readonly region?: pulumi.Input<string>;
    readonly releaseLabel?: pulumi.Input<string>;
    readonly repoUpgradeOnBoot?: pulumi.Input<string>;
    readonly retries?: pulumi.Input<number>;
    readonly scheduledTasks?: pulumi.Input<pulumi.Input<{ cron: pulumi.Input<string>, desiredCapacity?: pulumi.Input<string>, instanceGroupType: pulumi.Input<string>, isEnabled?: pulumi.Input<boolean>, maxCapacity?: pulumi.Input<string>, minCapacity?: pulumi.Input<string>, taskType: pulumi.Input<string> }>[]>;
    readonly securityConfig?: pulumi.Input<string>;
    readonly serviceAccessSecurityGroup?: pulumi.Input<string>;
    readonly serviceRole?: pulumi.Input<string>;
    readonly stepsFiles?: pulumi.Input<pulumi.Input<{ bucket: pulumi.Input<string>, key: pulumi.Input<string> }>[]>;
    readonly strategy?: pulumi.Input<string>;
    readonly tags?: pulumi.Input<pulumi.Input<{ key: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    readonly taskDesiredCapacity?: pulumi.Input<number>;
    readonly taskEbsBlockDevices?: pulumi.Input<pulumi.Input<{ iops?: pulumi.Input<number>, sizeInGb: pulumi.Input<number>, volumeType: pulumi.Input<string>, volumesPerInstance?: pulumi.Input<number> }>[]>;
    readonly taskEbsOptimized?: pulumi.Input<boolean>;
    readonly taskInstanceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly taskLifecycle?: pulumi.Input<string>;
    readonly taskMaxSize?: pulumi.Input<number>;
    readonly taskMinSize?: pulumi.Input<number>;
    readonly taskScalingDownPolicies?: pulumi.Input<pulumi.Input<{ actionType?: pulumi.Input<string>, adjustment?: pulumi.Input<string>, cooldown?: pulumi.Input<number>, dimensions?: pulumi.Input<{[key: string]: any}>, evaluationPeriods?: pulumi.Input<number>, maxTargetCapacity?: pulumi.Input<string>, maximum?: pulumi.Input<string>, metricName: pulumi.Input<string>, minTargetCapacity?: pulumi.Input<string>, minimum?: pulumi.Input<string>, namespace: pulumi.Input<string>, operator?: pulumi.Input<string>, period?: pulumi.Input<number>, policyName: pulumi.Input<string>, statistic?: pulumi.Input<string>, target?: pulumi.Input<string>, threshold: pulumi.Input<number>, unit: pulumi.Input<string> }>[]>;
    readonly taskScalingUpPolicies?: pulumi.Input<pulumi.Input<{ actionType?: pulumi.Input<string>, adjustment?: pulumi.Input<string>, cooldown?: pulumi.Input<number>, dimensions?: pulumi.Input<{[key: string]: any}>, evaluationPeriods?: pulumi.Input<number>, maxTargetCapacity?: pulumi.Input<string>, maximum?: pulumi.Input<string>, metricName: pulumi.Input<string>, minTargetCapacity?: pulumi.Input<string>, minimum?: pulumi.Input<string>, namespace: pulumi.Input<string>, operator?: pulumi.Input<string>, period?: pulumi.Input<number>, policyName: pulumi.Input<string>, statistic?: pulumi.Input<string>, target?: pulumi.Input<string>, threshold: pulumi.Input<number>, unit: pulumi.Input<string> }>[]>;
    readonly terminationProtected?: pulumi.Input<boolean>;
    readonly visibleToAllUsers?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a MrScalar resource.
 */
export interface MrScalarArgs {
    readonly additionalInfo?: pulumi.Input<string>;
    readonly additionalPrimarySecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    readonly additionalReplicaSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    readonly applications?: pulumi.Input<pulumi.Input<{ args?: pulumi.Input<pulumi.Input<string>[]>, name: pulumi.Input<string>, version?: pulumi.Input<string> }>[]>;
    readonly availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    readonly bootstrapActionsFiles?: pulumi.Input<pulumi.Input<{ bucket: pulumi.Input<string>, key: pulumi.Input<string> }>[]>;
    readonly clusterId?: pulumi.Input<string>;
    readonly configurationsFiles?: pulumi.Input<pulumi.Input<{ bucket: pulumi.Input<string>, key: pulumi.Input<string> }>[]>;
    readonly coreDesiredCapacity?: pulumi.Input<number>;
    readonly coreEbsBlockDevices?: pulumi.Input<pulumi.Input<{ iops?: pulumi.Input<number>, sizeInGb: pulumi.Input<number>, volumeType: pulumi.Input<string>, volumesPerInstance?: pulumi.Input<number> }>[]>;
    readonly coreEbsOptimized?: pulumi.Input<boolean>;
    readonly coreInstanceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly coreLifecycle?: pulumi.Input<string>;
    readonly coreMaxSize?: pulumi.Input<number>;
    readonly coreMinSize?: pulumi.Input<number>;
    readonly coreScalingDownPolicies?: pulumi.Input<pulumi.Input<{ actionType?: pulumi.Input<string>, adjustment?: pulumi.Input<string>, cooldown?: pulumi.Input<number>, dimensions?: pulumi.Input<{[key: string]: any}>, evaluationPeriods?: pulumi.Input<number>, maxTargetCapacity?: pulumi.Input<string>, maximum?: pulumi.Input<string>, metricName: pulumi.Input<string>, minTargetCapacity?: pulumi.Input<string>, minimum?: pulumi.Input<string>, namespace: pulumi.Input<string>, operator?: pulumi.Input<string>, period?: pulumi.Input<number>, policyName: pulumi.Input<string>, statistic?: pulumi.Input<string>, target?: pulumi.Input<string>, threshold: pulumi.Input<number>, unit: pulumi.Input<string> }>[]>;
    readonly coreScalingUpPolicies?: pulumi.Input<pulumi.Input<{ actionType?: pulumi.Input<string>, adjustment?: pulumi.Input<string>, cooldown?: pulumi.Input<number>, dimensions?: pulumi.Input<{[key: string]: any}>, evaluationPeriods?: pulumi.Input<number>, maxTargetCapacity?: pulumi.Input<string>, maximum?: pulumi.Input<string>, metricName: pulumi.Input<string>, minTargetCapacity?: pulumi.Input<string>, minimum?: pulumi.Input<string>, namespace: pulumi.Input<string>, operator?: pulumi.Input<string>, period?: pulumi.Input<number>, policyName: pulumi.Input<string>, statistic?: pulumi.Input<string>, target?: pulumi.Input<string>, threshold: pulumi.Input<number>, unit: pulumi.Input<string> }>[]>;
    readonly customAmiId?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly ebsRootVolumeSize?: pulumi.Input<number>;
    readonly ec2KeyName?: pulumi.Input<string>;
    readonly exposeClusterId?: pulumi.Input<boolean>;
    readonly jobFlowRole?: pulumi.Input<string>;
    readonly keepJobFlowAlive?: pulumi.Input<boolean>;
    readonly logUri?: pulumi.Input<string>;
    readonly managedPrimarySecurityGroup?: pulumi.Input<string>;
    readonly managedReplicaSecurityGroup?: pulumi.Input<string>;
    readonly masterEbsBlockDevices?: pulumi.Input<pulumi.Input<{ iops?: pulumi.Input<number>, sizeInGb: pulumi.Input<number>, volumeType: pulumi.Input<string>, volumesPerInstance?: pulumi.Input<number> }>[]>;
    readonly masterEbsOptimized?: pulumi.Input<boolean>;
    readonly masterInstanceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly masterLifecycle?: pulumi.Input<string>;
    readonly name: pulumi.Input<string>;
    readonly provisioningTimeout?: pulumi.Input<{ timeout: pulumi.Input<number>, timeoutAction: pulumi.Input<string> }>;
    readonly region?: pulumi.Input<string>;
    readonly releaseLabel?: pulumi.Input<string>;
    readonly repoUpgradeOnBoot?: pulumi.Input<string>;
    readonly retries?: pulumi.Input<number>;
    readonly scheduledTasks?: pulumi.Input<pulumi.Input<{ cron: pulumi.Input<string>, desiredCapacity?: pulumi.Input<string>, instanceGroupType: pulumi.Input<string>, isEnabled?: pulumi.Input<boolean>, maxCapacity?: pulumi.Input<string>, minCapacity?: pulumi.Input<string>, taskType: pulumi.Input<string> }>[]>;
    readonly securityConfig?: pulumi.Input<string>;
    readonly serviceAccessSecurityGroup?: pulumi.Input<string>;
    readonly serviceRole?: pulumi.Input<string>;
    readonly stepsFiles?: pulumi.Input<pulumi.Input<{ bucket: pulumi.Input<string>, key: pulumi.Input<string> }>[]>;
    readonly strategy: pulumi.Input<string>;
    readonly tags?: pulumi.Input<pulumi.Input<{ key: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    readonly taskDesiredCapacity?: pulumi.Input<number>;
    readonly taskEbsBlockDevices?: pulumi.Input<pulumi.Input<{ iops?: pulumi.Input<number>, sizeInGb: pulumi.Input<number>, volumeType: pulumi.Input<string>, volumesPerInstance?: pulumi.Input<number> }>[]>;
    readonly taskEbsOptimized?: pulumi.Input<boolean>;
    readonly taskInstanceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly taskLifecycle?: pulumi.Input<string>;
    readonly taskMaxSize?: pulumi.Input<number>;
    readonly taskMinSize?: pulumi.Input<number>;
    readonly taskScalingDownPolicies?: pulumi.Input<pulumi.Input<{ actionType?: pulumi.Input<string>, adjustment?: pulumi.Input<string>, cooldown?: pulumi.Input<number>, dimensions?: pulumi.Input<{[key: string]: any}>, evaluationPeriods?: pulumi.Input<number>, maxTargetCapacity?: pulumi.Input<string>, maximum?: pulumi.Input<string>, metricName: pulumi.Input<string>, minTargetCapacity?: pulumi.Input<string>, minimum?: pulumi.Input<string>, namespace: pulumi.Input<string>, operator?: pulumi.Input<string>, period?: pulumi.Input<number>, policyName: pulumi.Input<string>, statistic?: pulumi.Input<string>, target?: pulumi.Input<string>, threshold: pulumi.Input<number>, unit: pulumi.Input<string> }>[]>;
    readonly taskScalingUpPolicies?: pulumi.Input<pulumi.Input<{ actionType?: pulumi.Input<string>, adjustment?: pulumi.Input<string>, cooldown?: pulumi.Input<number>, dimensions?: pulumi.Input<{[key: string]: any}>, evaluationPeriods?: pulumi.Input<number>, maxTargetCapacity?: pulumi.Input<string>, maximum?: pulumi.Input<string>, metricName: pulumi.Input<string>, minTargetCapacity?: pulumi.Input<string>, minimum?: pulumi.Input<string>, namespace: pulumi.Input<string>, operator?: pulumi.Input<string>, period?: pulumi.Input<number>, policyName: pulumi.Input<string>, statistic?: pulumi.Input<string>, target?: pulumi.Input<string>, threshold: pulumi.Input<number>, unit: pulumi.Input<string> }>[]>;
    readonly terminationProtected?: pulumi.Input<boolean>;
    readonly visibleToAllUsers?: pulumi.Input<boolean>;
}