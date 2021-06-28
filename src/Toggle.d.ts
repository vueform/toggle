import Vue,{ VNode } from 'vue';

declare class Toggle extends Vue {
    modelValue?: any;
    value?: any;
    id?: string;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    falseValue?: any;
    trueValue?: any;
    offLabel?: string;
    onLabel?: string;
    labelledby?: string;
    describedby?: string;
    classes?: object;

    $emit(eventName: 'change', e: {originalEvent: Event, value: any}): this;

    $slots: {
      label: VNode[];
    };
}

export default Toggle;