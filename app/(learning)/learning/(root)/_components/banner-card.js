import { LucideIcon } from "lucide-react";

import { IconBadge } from "components/icon-badge"


export const BannerCard = ({
  variant,
  icon: Icon,
  description,
  label,
}) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <IconBadge
        variant={variant}
        icon={Icon}
      />
      <div>
        <p className="font-medium">
          {label}
        </p>
        <p className="text-gray-700 dark:text-gray-200 text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}