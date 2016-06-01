class TasksSerializer < ActiveModel::Serializer
  attributes :id, :title, :status, :date
end
