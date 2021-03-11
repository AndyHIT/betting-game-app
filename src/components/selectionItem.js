import { css } from '@emotion/css';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';


const SelectionItem = (props) => {
  const { selection: { eventId, gameId, name, price, optionName }, removeBetToCart } = props;

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(grey[800]),
      backgroundColor: grey[800],
      '&:hover': {
        backgroundColor: grey[900],
      },
    },
  }))(Button);

  const selectionTitle = `${optionName} ${name.split(' ').slice(1).join(' ')}`;

  const renderSelectionItem = (
    <>
      <div 
        className={css`
          margin: 30px;
          text-align: center;
        `}
      >
        <div
          className={css`
            font-weight: 500;
          `}
        >{selectionTitle}</div>
        <br />
        <div
          className={css`
            font-weight: 600;
            margin-bottom: 20px;
          `}
        >{price}</div>
        <ColorButton 
          variant='contained' 
          color='secondary'
          onClick={() => removeBetToCart(eventId, gameId, price)}
        >Delete</ColorButton>
      </div>
      <Divider />
    </>
  )

  return renderSelectionItem;
}

export default SelectionItem;