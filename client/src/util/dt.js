import moment from 'moment';

export const timeLabel = (dt) => (
    dt ? moment(dt).format('ddd, HH:mm A') : ''
)