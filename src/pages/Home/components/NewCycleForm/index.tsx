import { useCyclesContext } from '../../../../contexts/CyclesContext'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle, cycles } = useCyclesContext()
  const { register } = useFormContext()
  const taskWithoutDuplicationSuggestions = Array.from(
    new Set(cycles.map((cycle) => cycle.task)),
  )

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        autoComplete="off"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        {cycles.length &&
          taskWithoutDuplicationSuggestions.map((task) => (
            <option value={task} key={task}>
              {task}
            </option>
          ))}
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        max={60}
        min={5}
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
