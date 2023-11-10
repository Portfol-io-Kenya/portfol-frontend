import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { useForm } from "react-hook-form"

interface Props {
  defaultValues?: any
  children?: any
  onSubmit?: any
  yupSchema?: any
}

export default function Form({ defaultValues, children, onSubmit, yupSchema }: Props) {
  const methods = useForm({ defaultValues, resolver: yupResolver(yupSchema) })
  const { handleSubmit, formState: {errors} } = methods

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                errors: errors,
                key: child.props.name,
              },
            })
          : child
      })}
    </form>
  )
}