
import { useState } from "react";
import { Box,Stack, Typography } from '@mui/material';

export default function App() {
/**
 * Function calculateBMI()
 */
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  return (
<>
<hr/>
<Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">

<Typography  fontFamily="mono" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
The body mass index (BMI) calculator calculates 
body mass index from your weight and height.
      </Typography>
      <Stack className="w-full border rounded  max-w-xl m-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center mb-4 text-xl"> BMI Calculator</h1>
        <Stack className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="height"
          >
            Height
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-black leading-tight"
            id="Height"
            type="text"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Stack>
        <Stack className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="weight"
          >
            Weight
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-black leading-tight"
            id="Weight"
            type="Weight in kg"
            placeholder="Weight in cm"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Stack>
        <Stack className="flex items-center justify-center">
          <button
            className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
        </Stack>
          {bmiResult && (
          <Stack className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
          </Stack>
        )}
      </form>
    </Stack>
    </Box>
    <hr/>
</>
    
  );
}
