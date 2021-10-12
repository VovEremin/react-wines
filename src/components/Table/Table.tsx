import {useAppSelector} from "../../redux/hooks";
import {getWines} from "../../redux/selectors/winesSelector";
import Columns from "./Columns";
import {CSSTransition} from "react-transition-group";
import {StyledTable, StyledTr, TableText, StyledTd} from "./styles";

export const columnsName = ['Wine name', 'Region', 'Grape', 'Type', 'Price']

export default function Table () {

    const {isLoaded, items} = useAppSelector(getWines)

    return (
        <>
            {isLoaded && items.length > 0 ?
                <StyledTable>
                    <tbody>
                    <Columns/>
                        {items.map((item, index) => {
                            return (
                                <CSSTransition
                                    key={`${item.name}_${index}`}
                                    timeout={200}
                                    classNames="item"
                                >
                                    <StyledTr>
                                        <StyledTd>
                                            <div>
                                                <img src={item.image} alt='wine'/>
                                            </div>
                                        </StyledTd>
                                        <StyledTd>
                                            <div>
                                                <a href={item.url_1}>{item.name}</a>
                                            </div>
                                        </StyledTd>
                                        <StyledTd>
                                            <div>{item.region}</div>
                                        </StyledTd>
                                        <StyledTd>
                                            <div>{item.grapes}</div>
                                        </StyledTd>
                                        <StyledTd>
                                            <div>{item.wine_type}</div>
                                        </StyledTd>
                                        <StyledTd>
                                            <div>€{item.price}</div>
                                        </StyledTd>
                                    </StyledTr>
                                </CSSTransition>
                            )
                        })}
                    </tbody>
                </StyledTable> :
                isLoaded && items.length === 0 ?
                    <TableText>No results...</TableText> :
                    <TableText>Loading...</TableText>
            }
        </>
    );
}