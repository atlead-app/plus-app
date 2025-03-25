import { IWidgetHeaderSelect } from "./widget-header-select/widget-header-select.interface";

export interface IWidgetHeader {
    visible: boolean;
    select?: IWidgetHeaderSelect;
    datePicker?: boolean;
}