import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from './ui/select';

const SelectDemo = ({ values, heading = '' }) => {
	return (
		<Select>
			{heading && (
				<SelectTrigger>
					<SelectValue placeholder={`Select a ${heading}`} />
				</SelectTrigger>
			)}
			<SelectContent>
				<SelectGroup>
					<SelectLabel>{heading}</SelectLabel>
					{values.map((value, index) => (
						<SelectItem key={index} value={value.toLowerCase()}>
							{value}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default SelectDemo;
