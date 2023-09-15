import * as React from 'react';

interface BtnTranslateProps {

}

interface BtnTranslateState {

}

class BtnTranslate extends React.Component<BtnTranslateProps, BtnTranslateState> {
    render() {
        return (
            <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-100 ease-out"
            onClick={() => this.fetchApi()}>
                Traducir
            </button>
        );
    }

    fetchApi = () => {
        console.log("Hello world");
    }
}

export default BtnTranslate;