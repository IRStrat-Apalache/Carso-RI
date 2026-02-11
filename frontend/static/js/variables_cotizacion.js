const ticker_symbol = "EDUCA18";
const url = 'https://hkpy.investorcloud.net/intradia/';
const history_url = `${url}history/`;
const local_history_url = `${history_url}${ticker_symbol}`;
const dividends_url = `${url}dividends/emiter/`;
const local_dividends_url = `${dividends_url}${ticker_symbol}`;
const instradia = `${url}${ticker_symbol}`;

const startDate = new Date();
startDate.setFullYear(startDate.getFullYear() - 3);

const endDate = new Date();

const params = {
    start: startDate.toISOString().split('T')[0],
    end: endDate.toISOString().split('T')[0]
};