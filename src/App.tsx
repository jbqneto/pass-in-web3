import { AttendeeList } from "./components/atendee/attendee-list"
import { Header } from "./components/header/header"

function App() {

  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header></Header>
      <AttendeeList></AttendeeList>
    </div>
  )
}

export default App
