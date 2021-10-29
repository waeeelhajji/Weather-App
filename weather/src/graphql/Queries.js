import {Gql} from '@apollo/client'


export const  GETING_THEWEATHER_QUERY = Gql`
query getCityByName(name= String!) {
    getCityByName(name:$name){
        name 
        country
        weather {
            summary {
                title
                description
                icon
            }
            temperature {
                actual
                feelsLike
                min
                max
            }
            wind {
                speed
                deg
            }
            clouds {
                all
                visibility
                humidity
            }
            timestamp
        }
    }
}
` 

