const router = require('express').Router();
const developers = require('../data/developers');

const regular_handler = (params, req, res, next) => {
    return res.status(params?.code).send(params);
};

const test_task = async (req, res, next) => {

    try {
        const data = req?.body;
        const myCombination = [];
        developers?.map(ele => {
            console.log(ele?.salary > data)
            if (ele?.salary > data) {
                myCombination.push(ele)
            }
        })
        next({
            code: 200,
            type: 'success',
            message: myCombination,
        });
    } catch (err) {
        next({
            code: 500,
            type: 'error',
            message: err?.message,
        });
    }
}

router.post('/task-backend', test_task, regular_handler)

module.exports = router;