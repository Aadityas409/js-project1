let isDOBOpen = false;
const  settingcogE1 = document.getElementById("SettingIcon");
const  settingContentE1 = document.getElementById("SettingIcon");

const toggleDateOfBirthSelector = () =>{
    if (isDOBOpen) {

        settingContentE1.classList.add("hide");
        
    }
    else{
        settingContentE1.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
    console.log("Toggle",isDOBOpen);

};

settingcogE1.addEventListener("click", toggleDateOfBirthSelector);
