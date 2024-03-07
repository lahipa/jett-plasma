import cx from "classnames";
import * as TablerIcons from "@tabler/icons-react";
// import * as SolidIcons from "@heroicons/react/24/solid";
// import * as OutlineIcons from "@heroicons/react/24/outline";
import * as CustomIcons from "../../icons";

const Icon = ({ icon, color, size = 24, outline = false, strokeWidth = 1.5 }) => {
    // const { ...HeroIcons } = outline ? OutlineIcons : SolidIcons;
    const icons = { ...TablerIcons, ...CustomIcons };

    const Icon = icons[icon];

    const iconStyle = cx({ "text-neutral-100": !color }, color);

    return (
        <Icon
            className={iconStyle}
            style={{ width: size, height: size }}
            strokeWidth={(outline && strokeWidth) || 1.6}
        />
    );
};

export default Icon;