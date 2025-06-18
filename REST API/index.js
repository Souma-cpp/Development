import axios from "axios";

async function getActivity() {
  try {
    const response = await axios.get("https://www.boredapi.com/api/activity");
    console.log(response.data.activity);
  } catch (error) {
    console.log(error);
  }
}

getActivity();
