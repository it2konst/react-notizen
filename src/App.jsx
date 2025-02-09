import "./App.css";
import Button from "@/components/Button/Button";
import JournalItem from "@/components/JournalItem/JournalItem";
import CardButton from "@/components/CardButton/CardButton";

function App() {
  return (
    <>
      <h1>Заголовок</h1>
      <p>Привет!!!</p>
      <Button>Кнопка</Button>

      <CardButton>
        <JournalItem title="Заголовок" post="Текст" date={new Date()} />
      </CardButton>
    </>
  );
}

export default App;
