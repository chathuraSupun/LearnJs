const dayArray = String('2022 - 8 - 21').split('-');

const expTimeString = `${dayArray[0].trim()}-${String(
  dayArray[1].trim()
).padStart(2, '0')}-${String(dayArray[2].trim()).padStart(2, '0')}T23:59:59`;

const expTime = new Date(expTimeString) / 1000;

const now = new Date() / 1000;

const remainingSeconds = expTime - now;
const days = parseInt(remainingSeconds / (3600 * 24), 10);
const hours = parseInt((remainingSeconds / 3600) % 24, 10);

const result = `${days} days : ${hours} hrs more`;
