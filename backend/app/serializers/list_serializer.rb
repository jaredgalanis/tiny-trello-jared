class ListSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :items do
    link :related, "/api/v1/items?list_id=#{object.id}"
    include_data false
  end

end
