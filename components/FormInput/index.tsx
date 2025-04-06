import { FieldValues, Path, UseControllerProps, Controller } from 'react-hook-form'
import { ReactNode } from 'react'
import { KeyboardTypeOptions, View } from 'react-native'
import { Input } from '../Input'
import { useFocusInput } from '@/hooks'

interface FormInputProps<T extends FieldValues> extends UseControllerProps<T> {
  label: string
  name: Path<T>
  type?: string
  placeholder?: string
  error?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  paddingLeftIcon?: number;
  paddingRightIcon?: number;
  paddingTopLabel?: number;
  paddingLeftLabel?: number;
  colorLabel?: string,
  className?: string
  required?: boolean
  keyboardType?: KeyboardTypeOptions | undefined
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined
  secureTextEntry?: boolean | undefined
}

export function FormInput<T extends FieldValues>({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  iconLeft,
  iconRight,
  required = false,
  keyboardType,
  autoCapitalize,
  control,
  secureTextEntry,
  paddingLeftIcon=0,
  paddingRightIcon=0,
  paddingTopLabel=0,
  paddingLeftLabel=9,
  colorLabel="black",
  ...formInputProps
}: FormInputProps<T>) {
  const { isFocused, handleFocus, handleBlur } = useFocusInput();
  return (
    <Input.Root>
      <Input.Label label={label} colorLabel={colorLabel} required={required} paddingTopLabel={paddingTopLabel} paddingLeftLabel={paddingLeftLabel} />
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={{ position: 'relative' }}>
            {iconLeft && <Input.Icon position="left">{iconLeft}</Input.Icon>}
            <Input.Field
              {...formInputProps}
              onChangeText={onChange}
              value={value}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              secureTextEntry={secureTextEntry}
              error={error}
              isFocused={isFocused}
              // style={{
              //   paddingTop: paddingTopLabel
              // }}
            />
            {iconRight && <Input.Icon position="right">{iconRight}</Input.Icon>}
          </View>
        )}
      />
      <Input.MessageError message={error} />
    </Input.Root>
  )
}
