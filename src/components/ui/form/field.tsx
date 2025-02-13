import { AlertCircleIcon } from "lucide-react-native"
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "~/components/ui/form-control"

type FieldError = undefined | false | null | string

export type FieldProps = {
  isRequired?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  label?: string
  errors?: FieldError[]
}

type Props = FieldProps & {
  children: React.ReactNode
}
export function Field({ label, children, errors, ...rest }: Props) {
  const isInvalid = !!errors?.length

  return (
    <FormControl size="md" isInvalid={isInvalid} {...rest}>
      {label && (
        <FormControlLabel>
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
      )}

      {children}

      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} size="sm" />
        <FormControlErrorText>{errors?.join(", ")}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}
