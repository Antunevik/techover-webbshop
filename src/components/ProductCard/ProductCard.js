import { iconButton, Skeleton, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductCard = ({ title, image, price, disabled, loading, id }) => {
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar
					variant="rounded"
					sx={{ width: 65, height: 92, bgcolor: 'background.paper', marginRight: '20px' }}
				>
					{loading ? (
						<Skeleton variant="rectangular" width={65} height={92} />
					) : (
						<img style={{ width: 65 }} src={image} alt={title} />
					)}
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={loading ? <Skeleton variant="text" width={50} height={20} /> : title}
				secondary={loading ? <Skeleton variant="text" width={20} height={20} /> : `${price}kr`}
			/>
			<IconButton onClick={() => console.log('add product')}>
				<AddIcon fontsize="large" sx={{ color: '#00c896' }} />
			</IconButton>
			<IconButton onClick={() => console.log('remove product')} disable={disabled}>
				<RemoveIcon fontsize="large" sx={{ color: '#00c896' }} />
			</IconButton>
		</ListItem>
	);
};

export default ProductCard;
