import request from '../utils/request';


export const getTextMessageService = (params) => request({
    url: 'http://localhost:5000/api/dialogflow/query',
    method: 'POST',
    data: params
});

export const getEventMessageService = (params) => request({
    url: 'http://localhost:5000/api/dialogflow/event',
    method: 'POST',
    data: params
});