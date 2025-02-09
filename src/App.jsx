import "./App.css";
import Button from "@/components/Button/Button";
import JournalItem from "@/components/JournalItem/JournalItem";

function App() {
  return (
    <>
      <div>Привет!!!</div>
      <Button>Кнопка</Button>
      <JournalItem title="Заголовок" post="Текст" date={new Date()} />
    </>
  );
}

export default App;
