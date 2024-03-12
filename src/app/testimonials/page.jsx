import React from 'react'
import Container from '../@components/container'
import { CardTestimony } from '../@components/card/CardTestimony'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, corporis.",
      time: "2 days ago",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_1053244&psig=AOvVaw05dwqVr_4btlBnSh1Hnyf0&ust=1710250848653000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiniYWr7IQDFQAAAAAdAAAAABAE" 
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial: "Suscipit nobis voluptatem veritatis maxime doloribus ipsa maiores. Ducimus, error corporis.",
      time: "4 days ago",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_1053244&psig=AOvVaw05dwqVr_4btlBnSh1Hnyf0&ust=1710250848653000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiniYWr7IQDFQAAAAAdAAAAABAE" 
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial: "Suscipit nobis voluptatem veritatis maxime doloribus ipsa maiores. Ducimus, error corporis.",
      time: "4 days ago",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_1053244&psig=AOvVaw05dwqVr_4btlBnSh1Hnyf0&ust=1710250848653000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiniYWr7IQDFQAAAAAdAAAAABAE" 
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial: "Suscipit nobis voluptatem veritatis maxime doloribus ipsa maiores. Ducimus, error corporis.",
      time: "4 days ago",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_1053244&psig=AOvVaw05dwqVr_4btlBnSh1Hnyf0&ust=1710250848653000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiniYWr7IQDFQAAAAAdAAAAABAE" 
    },
  ];

  return (
    <section>
      <Container>
        <div className="grid grid-rows-3 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className='text-3xl row-start-2'>What People Say About Us</div>
          {testimonials.map((testimony, index) => (
            <div key={testimony.id} className={`row-start-${index % 2 === 0 ? '1' : '3'} row-span-2`}>
              <CardTestimony
                name={testimony.name}
                testimonial={testimony.testimonial}
                time={testimony.time}
                image={testimony.image}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials