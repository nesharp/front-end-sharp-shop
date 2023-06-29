import { NextPage } from "next";
import process from "process";
import { env } from "process";

import Home from '@/components/screens/Home/Home';


const HomePage: NextPage = () => {
  return <Home />
  
}
export default HomePage