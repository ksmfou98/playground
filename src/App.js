import Counter from "./components/Counter/index.js";
import Example from "./components/Example/index.js";
import Test from "./components/Test/Test.js";
import Tutorial from "./components/Tutorial/index.js";

export default class App {
  constructor($app) {
    new Test($app);
    new Example($app);
    new Tutorial($app);
    new Counter($app);
  }
}
