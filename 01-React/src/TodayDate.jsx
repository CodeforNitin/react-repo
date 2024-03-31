const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

function TodayDate() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}

export default TodayDate;
