import { type FieldValues, useController, type UseControllerProps } from "react-hook-form"
import { DateTimePicker, type DateTimePickerProps } from '@mui/x-date-pickers';

type Props<TFieldValues  extends FieldValues > = & UseControllerProps<TFieldValues> & DateTimePickerProps<boolean>

export default function DateTimeInput<TFieldValues extends FieldValues>(props: Props<TFieldValues>) {
    const { field, fieldState } = useController({ ...props });

    return (
        <DateTimePicker 
            {...props}
            value={field.value ? new Date(field.value) : null}
            onChange={value => {
                field.onChange(new Date(value!))
            }}
            sx={{width: '100%'}}
            slotProps={{
                textField: {
                    onBlur: field.onBlur,
                    error: !!fieldState.error,
                    helperText: fieldState.error?.message
                }
            }}
        />
    )
}