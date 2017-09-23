export function myCatListLoaded(cats) {
    return {
        type: "MY_CAT_LIST_LOADED",
        value: cats,
    }
}

export function loadMyCatList() {
    return function (dispatch) {
        dispatch({
            type: "LOAD_MY_CAT_LIST"
        });
        fetch("/cats")
            .then((response) => {
                return response.json();
            }).then((cats) => {
                dispatch(myCatListLoaded(cats));
            });
    };
}


export function createCat(cat) {
    return function (dispatch) {
        fetch("/cats", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cat)
        }).then(() => dispatch(loadMyCatList(cat)));
    }
}

export function removeCat(id) {
    return function (dispatch) {
        fetch("/cats/" + id, {
            method: "DELETE",
            body: JSON.stringify(id)
        }).then(() => dispatch(loadMyCatList()));
    }
}