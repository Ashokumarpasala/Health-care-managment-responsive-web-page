import React, { useState } from 'react';

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    if (!weight || !height) {
      alert('Please enter both weight and height.');
      return;
    }

    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height);

    if (isNaN(weightInKg) || isNaN(heightInMeters) || heightInMeters <= 0 || weightInKg <= 0) {
      alert('Please enter valid values for weight and height.');
      return;
    }

    const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2));
  };

  return (
    <>
        <h5 className='card  p-5 fw-bold headings'><u>Health Check Up's</u></h5>
            <div className=' m-5 d-flex justify-content-evenly'>
             <div>
                <h1 className='text-primary fw-bold bmihead' style={{fontSize:"70px"}}>First Caculate your BMI</h1>
                <p>BMI is an estimate of body fat and a good gauge of your risk for diseases that can occur with more body fat. <br /> The higher your BMI, the higher your risk for certain diseases such as heart disease, <br />
                high blood pressure, type 2 diabetes, gallstones, breathing problems, and certain cancers.
                <br />
                </p>
                <p>The BMI is a convenient rule of thumb used to broadly categorize a person as based <br /> on tissue mass (muscle, fat, and bone) and height. Major adult BMI classifications <br /> are <strong>underweight</strong> (under 18.5 kg/m2), <strong className='text-success fw-bold'>normalweight</strong> (18.5 to 24.9), <strong>overweight</strong> (25 to 29.9), <br /> and <strong className='text-danger'>obese</strong> (30 or more).</p>
           </div>
<div>
        <h1>BMI Calculator</h1>
               <label>
        Weight (kg):
        <input type="number" className='form-control' value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <label className='my-3'>
        Height (m):
        <input type="number" className='form-control' value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <button className='btn btn-primary' onClick={calculateBmi}>Calculate BMI</button>

      {bmi !== null && (
          <div className='py-2'>
          <h3 className='border p-2 rounded-4 border-success'>Your BMI is: {bmi}</h3>
        </div>
      )}
      </div>
      </div>
      </>
  );
};

export default Bmi;

