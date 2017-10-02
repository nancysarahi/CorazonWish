export function kidsLoaded(kids) {
    return {
        type: "KIDS_LOADED",
        value: kids,
    }
}

export function loadKids() {
    return function (dispatch) {
        dispatch({
            type: "LOAD_KIDS"
        });
        fetch("/kids")
            .then((response) => {
                return response.json();
            }).then((kids) => {
                dispatch(kidsLoaded(kids));
            });
    };
}

export function createKid(kid) {
    return function (dispatch) {
        fetch("/kids", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(kid)
        }).then(() => dispatch(loadKids(kid)));
    }
}

export function removeKid(id) {
    return function (dispatch) {
        fetch("/kids/" + id, {
            method: "DELETE",
            body: JSON.stringify(id)
        }).then(() => dispatch(loadKids()));
    }
}