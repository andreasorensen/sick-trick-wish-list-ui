import './TrickCard.css';

const TrickCard = ({ tricks }) => {

  return (
    <div className='cards-container'>
      {tricks.map((trick) => (
        <div className='trick-card' key={trick.id}>
          <p className='trick-title'>{trick.name}</p>
          <p>Stance: {trick.stance}</p>
          <p>Obstacle: {trick.obstacle}</p>
          <a href={trick.tutorial} className='trick-link'>Tutorial Link</a>
        </div>
      ))}
    </div>
  );
};

export default TrickCard;
