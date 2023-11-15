import SignupForm from "./components/SignupForm/SignupForm";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";


const colorPickerOptions = [
  { label: 'red', color: '#F44336'},
  { label: 'green', color: '#4CAF50'},
  { label: 'blue', color: '#2196F3'}
]

export default function App3() {
  return (
    <>
      <Timer />
    </>
  )
}
