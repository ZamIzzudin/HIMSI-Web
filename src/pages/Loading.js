import { RaceBy } from '@uiball/loaders'

import '../styles/pages/Loading.css'

export default function Loading() {
    return (
        <div className="loading-page">
            <h3 className="loading-heading">Loading...</h3>
            <RaceBy
                size={250}
                lineWeight={5}
                speed={1.4}
                color="#f49c45"
            />
        </div>
    )
}