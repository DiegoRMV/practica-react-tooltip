import "./App.css";
import TooltipText from "./components/TooltipText";

function App() {
	return (
		<div className="App">
			<p>
				<TooltipText tooltip={"texto"}>Lorem ipsum</TooltipText> dolor sit amet
				consectetur adipisicing elit. Qui autem eveniet ut, ea odit eum
				voluptas, corrupti rerum quibusdam vero est, earum ex nobis nisi
				adipisci. Tempore doloribus minus dignissimos!
			</p>
			<p>Lorem ipsum dolor sit <TooltipText tooltip={"soy un texto"}>amet consectetur</TooltipText>i!</p>
			<p>Lorem ipsum dolor sit amet consectetur </p>
		</div>
	);
}

export default App;
