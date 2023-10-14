import { VNode, defineComponent } from 'vue';

interface ToggleProps {
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
  aria?: object;
}

declare class Toggle implements ReturnType<typeof defineComponent> {
  modelValue: ToggleProps['modelValue'];
  value: ToggleProps['value'];
  id: ToggleProps['id'];
  name: ToggleProps['name'];
  disabled: ToggleProps['disabled'];
  required: ToggleProps['required'];
  falseValue: ToggleProps['falseValue'];
  trueValue: ToggleProps['trueValue'];
  offLabel: ToggleProps['offLabel'];
  onLabel: ToggleProps['onLabel'];
  labelledby: ToggleProps['labelledby'];
  describedby: ToggleProps['describedby'];
  classes: ToggleProps['classes'];
  aria: ToggleProps['aria'];

  $props: ToggleProps;

  $emit(eventName: 'change', value: any): this | void;

  $slots: {
    label: VNode[];
  };
}

export default Toggle;