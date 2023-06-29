
// This is a Class Component file including different functional components

import React from 'react';
import Loader from './components/Loader';
import CompOne from './components/CompOne';
import CompTwo from './components/CompTwo';
import CompThree from './components/CompThree';

interface myProps{}; // type of props is empty because this class doesnt receive any props
interface myState{
  name:string;   // type of state
}
export const nameContext = React.createContext("");

class App extends React.PureComponent<{},myState>{

  private loaderRef;
  private timeOut:any;
  private compThreeRef;

  constructor(props:myProps){
    super(props);

    this.state={
        name:""
    }
    this.loaderRef = React.createRef<HTMLDivElement>();
    this.compThreeRef = React.createRef<HTMLDivElement>();

    this.passData = this.passData.bind(this);
    this.scroll = this.scroll.bind(this);
    
  }

    private hideLoader(){
      var x = this.loaderRef.current;
      x!!.style.transition = "all 500ms ease";
      x!!.style.transform = "translateY(-100%)";
    }

    private showLoader(){
      var x = this.loaderRef.current;
      x!!.style.transition = "none";
      x!!.style.transform = "translateY(0)";
    }


    componentDidMount(): void {

      this.timeOut = setTimeout(()=>{
        this.hideLoader();
      },2000)

    }


    passData(name:string){
      this.setState({name:name});
    }

    scroll(){
      var x = this.compThreeRef.current!.getBoundingClientRect();
      var displacement = x.top || x.y;

      window.scrollBy({
        top:displacement,
        behavior:'smooth'
      })

    }

  render(){
    return (
      <div className="App">
  
        <Loader ref={this.loaderRef} />

        <CompOne passingHandler={this.passData} />
        <CompTwo name={this.state.name} scroller={this.scroll} />

        {/* Example of Context */}

        <nameContext.Provider value={this.state.name}>
          <CompThree ref={this.compThreeRef} />
        </nameContext.Provider>

      </div>
    );
  }
}

export default App;
