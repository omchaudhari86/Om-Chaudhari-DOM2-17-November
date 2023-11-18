// TODO: Fetch data from API and populate the table
const coinTable = document.querySelector('#coin-table');

async function fetchData() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10');
    const data = await response.json();

    for (const coin of data) {
        const row = document.createElement('tr');

        const iconCell = document.createElement('td');
        const image = document.createElement('img');
        image.src = coin.image;
        image.classList.add('coin-image');
        iconCell.appendChild(image);
        iconCell.appendChild(document.createTextNode(coin.name));

        const nameCell = document.createElement('td');
        nameCell.textContent = coin.name;

        const symbolCell = document.createElement('td');
        symbolCell.textContent = coin.symbol;

        const currentPriceCell = document.createElement('td');
        currentPriceCell.textContent = `$${coin.current_price}`;

        const totalVolumeCell = document.createElement('td');
        totalVolumeCell.textContent = `$${coin.total_volume}`;

        const percentChangeCell = document.createElement('td');
        percentChangeCell.textContent = `${coin.price_change_percentage_24h}%`;
        if (coin.price_change_percentage_24h > 0) {
            percentChangeCell.classList.add('positive');
        } else {
            percentChangeCell.classList.add('negative');
        }

        row.appendChild(iconCell);
        row.appendChild(nameCell);
        row.appendChild(symbolCell);
        row.appendChild(currentPriceCell);
        row.appendChild(totalVolumeCell);
        row.appendChild(percentChangeCell);

        coinTable.appendChild(row);
    }
}

fetchData();
