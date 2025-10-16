async function getData() {
  const res = await fetch('https://snowtooth-hotel-api.fly.dev');
  return res.json();
}

function HotelBLock({name, capacity}) {
  return (
      <div>
        <h2>{name}</h2>
        <p>{capacity}</p>
      </div>
  );
}

export default async function Page() {
  const res = await getData();
  return (
      <main>
        <div>
          <h1>Hotel Details</h1>
          <div>
            {res.map((hotel) => (
              <HotelBLock hotel={hotel.id} name={hotel.name} capacity={hotel.capacity} />
              ))}
          </div>
        </div>
      </main>
  );
}