import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HealthInformation = () => {
  const ageGroups = [
    {
      title: 'Children (0-12 years)',
      description: 'Ensure a balanced diet with plenty of fruits and vegetables.',
      foods: ['Milk', 'Whole grains', 'Fruits', 'Vegetables', 'Lean proteins'],
      image: 'https://www.bhg.com/thmb/Mwd_YEkDbVg_fPsUDcWr3eZk9W0=/5645x0/filters:no_upscale():strip_icc()/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg'
    },
    {
      title: 'Teens (13-18 years)',
      description: 'Need a mix of proteins, carbohydrates, and healthy fats. Encourage regular physical activity.',
      foods: ['Fish', 'Nuts', 'Whole grains', 'Dairy products', 'Fruits', 'Vegetables'],
      image: 'https://www.shutterstock.com/image-photo/sources-healthy-protein-meat-fish-260nw-2303082401.jpg'
    },
    {
      title: 'Adults (19-50 years)',
      description: 'Maintain a well-balanced diet, stay hydrated, and engage in regular exercise.',
      foods: ['Lean proteins', 'Whole grains', 'Fruits', 'Vegetables', 'Healthy fats'],
      image:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/1659096-Animal-vs.-Plant-Protein-%E2%80%94-Whats-the-Difference-Recovered_Header.jpg?w=1155&h=1528"
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center  mb-4">Health and Nutrition Information</h2>

      <div className="row">
        {ageGroups.map((group, index) => (
          <div key={index} className="col-md-4">
            <div className="card" style={{height:"600px"}}>
              <div className="card-body">
                <h5 className="card-title">{group.title}</h5>
                <p className="card-text">{group.description}</p>
                <img src={group.image} className='rounded-4 hel' style={{width:"350px"}} alt="" />
                <hr />
                <h6 className="card-subtitle mb-2 text-muted">Recommended Foods:</h6>
                <ul className="list-unstyled">
                  {group.foods.map((food, foodIndex) => (
                    <li key={foodIndex}>{food}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthInformation;
