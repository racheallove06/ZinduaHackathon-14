import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "./Chat";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import user1 from "../assets/pro7.svg";
import veggies from "../assets/rectangle 291.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import carrots from "../assets/carrots.jpg";
import user2 from "../assets/pro71.svg";
import Footer from "../components/Footer";

const Market = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-grow overflow-auto">
        <SideBar />
        <div className="flex-grow overflow-auto">
          {/* Add your market content here */}
          <div className="p-4 mt-[80px]">
            <h1 className="text-2xl font-bold mb-4 ml-[320px]">Market Post</h1>
            <div className="ml-[200px]">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search....."
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                >
                  <KeyboardVoiceRoundedIcon />
                </IconButton>
              </Paper>
            </div>

            <div className="flex ml-[50px] mt-6">
              <div className=" w-[52px] h-[52px] rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={user1}
                  className="object-contai rounded-full w-[80%] h-[80%] "
                />
              </div>
              <div className="ml-5">
                <p className="font-semibold text-black text-[24px] ">
                  {" "}
                  Jane Njoki
                </p>
                <p className="ml-5 text-black text-[24px] ">Marsabit</p>
              </div>
            </div>

            <div className="ml-[50px]">
              <img src={veggies} className="w-[650px]" />
              <div className="flex justify-between">
                <p className="text-black ">Order today </p>
                <FavoriteIcon className="ml-[500px] text-gray-600" />
                <ShoppingCartIcon className="mr-[200px] ml-6 text-gray-600" />
              </div>
            </div>

            <div className="flex ml-[50px] mt-6">
              <div className=" w-[52px] h-[52px] rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={user2}
                  className="object-contai rounded-full w-[80%] h-[80%] "
                />
              </div>
              <div className="ml-5">
                <p className="font-semibold text-gray-600"> Micheal. D</p>
                <p className="ml-5 text-gray-400">Isiolo</p>
              </div>
            </div>

            <div className="ml-[50px]">
              <img src={carrots} className="w-[650px]" />
              <div className="flex justify-between">
                <p className="text-gray-600">Place your order today </p>
                <FavoriteIcon className="ml-[500px] text-gray-600" />
                <ShoppingCartIcon className="mr-[200px] ml-6 text-gray-600" />
              </div>
            </div>

            <div className="flex ml-[50px] mt-6">
              <div className=" w-[52px] h-[52px] rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={user1}
                  className="object-contai rounded-full w-[80%] h-[80%] "
                />
              </div>
              <div className="ml-5">
                <p className="font-semibold text-gray-600"> Micheal. D</p>
                <p className="ml-5 text-gray-400">Isiolo</p>
              </div>
            </div>

            <div className="ml-[50px]">
              <img src={veggies} className="w-[650px]" />
              <div className="flex justify-between">
                <p className="text-gray-600">Place your order </p>
                <FavoriteIcon className="ml-[500px] text-gray-600" />
                <ShoppingCartIcon className="mr-[200px] ml-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
